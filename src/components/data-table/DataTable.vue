<template>
  <div :class="rootClass">
    <div :class="containerFilter">
      <!-- Number item List -->
      <div :class="containerFilterDropInput">
        <select
          v-model="currentEntries"
          @change="paginateEntries"
          name="quantItem"
          id="quantItem"
          :class="inputSelect"
        >
          <option v-for="number in showEntries" :key="number" :value="number">
            {{ number }}
          </option>
        </select>
        <label for="quantItem" class="text-sm text-gray-500"
          >resutados por página</label
        >
      </div>

      <!-- Search -->
      <div :class="containerFilterDropInput">
        <label class="text-sm text-gray-500" for="filter-table"
          >Pesquisar</label
        >
        <input
          v-model="searchInput"
          @keyup="searchEvent"
          :class="inputInput"
          type="text"
        />
      </div>
    </div>

    <!-- Table -->
    <table :class="containerTable">
      <thead>
        <tr :class="containerTr">
          <th :class="containerTh"
            v-for="th in columns"
            :key="th.name"
          >
            <div :class="containerThDiv">
              <span>{{ th.text }}</span>
              <span
                @click.prevent="sortByColumn(th.name)"
                class="cursor-pointer"
                :id="th.name"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 -mb-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(td, i) in filteredEntries"
          :key="i"
          :class="{ containerTrBody, 'bg-white': i % 2 === 0 }"
        
        >
          <td
            v-for="(col, index) in td"
            :key="col"
            :class="containerTdBody"
          >
        

            <router-link
              v-if="route.column == index"
              :class="routLink"
              :to="route.link + `/${td.id}`"
              >{{ col }}
            </router-link>          
            
            <p v-else>{{ col }}</p>
        
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End Table -->

    <!-- Pagination -->
    <div :class="containerPagination">
      <p :class="paginationInfo">
        Item {{ showInfo.from }} a {{ showInfo.to }} de
        {{ showInfo.of }} registros
      </p>

      <ul :class="paginationUl">
        <li
          :class="[paginationLi,
            'text-white',
            { 'opacity-50 cursor-not-allowed': currentPage === 1 },
          ]"
        >
          <a
            class="px-2 py-1 flex justify-start items-center"
            href="#"
            @click.prevent="(currentPage = 1), paginateEntries()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </a>
        </li>

        <li
          v-for="pag in showPagination"
          :key="pag"
          :class="[paginationLiPag,
            'text-gray-600',
            {
              ellipsis: pag === '...',
              [active] : pag === currentPage,
            },
          ]"
        >
          <a class="px-3 py=2" href="#" @click.prevent="paginateEvent(pag)">{{
            pag
          }}</a>
        </li>

        <li
          :class="[paginationLi,
            'text-white',
            { 'opacity-50 cursor-not-allowed': currentPage === allPages },
          ]"
        >
          <a
            class="px-2 py-1 flex justify-start items-center"
            href="#"
            @click.prevent="(currentPage = allPages), paginateEntries()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as $ from "alga-js";
import FixedMixin from "../../utils/FixedMixin";
import VariantMixin from "../../utils/VariantMixin";
import SizeMixin from "../../utils/SizeMixin";
export default {
  name: "TWDataTable",
  mixins: [FixedMixin, VariantMixin, SizeMixin],
  props: {
    columns:{
      type:Array || Object,
      default:null
   },
   entries:{
     type:Array || Object,
     default:null
   },
   route:{
      type:Array,
      default:null
    },
  },
  data() {
    return {
      config: this.$TWVue.DataTable,
      showEntries: [5, 10, 15, 25, 50, 75, 100],
      currentEntries: 5,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: "",
      searchEntries: [],
      sort: "",
    };
  },

  computed: {
    showInfo() {
      return $.array.show(
        this.getCurrentEntries(),
        this.currentPage,
        this.currentEntries
      );
    },

    params(column, col, td){
      if(column === 'id'){
        return td.id;
      }else{
        return col.toLowerCase().splice(' ', '-')
      }
    },

    showPagination() {
      return $.array.pagination(this.allPages, this.currentPage, 2);
    },

    //classes
    rootClass() {
      return [this.fixedClass.root];
    },

    containerFilter() {
      return [this.fixedClass.containerFilter];
    },

    containerFilterDropInput() {
      return [this.fixedClass.containerFilterDropInput];
    },
    inputSelect() {
      return [this.fixedClass.containerSelect, this.sizeClass, this.variantClass.input];
    },
    inputInput() {
      return [this.fixedClass.containerInput, this.sizeClass, this.variantClass.input];
    },
    containerTable(){
      return [this.fixedClass.containerTable, this.variantClass.root]
    },
    containerTr(){
      return [this.fixedClass.containerTr, this.variantClass.root]
    },
    containerTh(){
      return [this.fixedClass.containerTh, this.sizeClass]
    },
    containerThDiv(){
      return [this.fixedClass.containerThDiv]
    },
    containerTrBody(){
      return [this.fixedClass.containerTrBody]
    },
    containerTdBody(){
      return [this.fixedClass.containerTdBody]
    },
    routLink(){
      return [this.fixedClass.routLink, this.variantClass.root]
    },
    containerPagination(){
      return [this.fixedClass.containerPagination]
    },
    paginationInfo(){
      return [this.fixedClass.paginationInfo]
    },
    paginationUl(){
      return [this.fixedClass.paginationUl]
    },
    paginationLi(){
      return [this.fixedClass.paginationLi, this.variantClass.root]
    },
    paginationLiPag(){
      return [this.fixedClass.paginationLiPag, this.variantClass.pagination]
    },
    active(){
      return [this.variantClass.active]
    }
   
  },
  created() {   
    this.filteredEntries = $.array.paginate(
      this.getCurrentEntries(),
      this.currentPage,
      this.currentEntries
    );

    this.allPages = $.array.pages(
      this.getCurrentEntries(),
      this.currentEntries
    );
  },
  methods: {
    paginateEntries() {
      if (this.searchInput.length >= 3) {
        this.searchEntries = $.array.search(
          this.getCurrentEntries(),
          this.searchInput
        );
        this.filteredEntries = $.array.paginate(
          this.searchEntries,
          this.currentPage,
          this.currentEntries
        );
        this.allPages = $.array.pages(this.searchEntries, this.currentEntries);
      } else {
        this.searchEntries = [];
        this.filteredEntries = $.array.paginate(
          this.getCurrentEntries(),
          this.currentPage,
          this.currentEntries
        );
        this.allPages = $.array.pages(
          this.getCurrentEntries(),
          this.currentEntries
        );
      }
    },

    paginateEvent(page) {
      this.currentPage = page;
      console.log(page)
      this.paginateEntries();
    },

    searchEvent() {
      this.currentPage = 1;
      this.paginateEntries();
    },

    getCurrentEntries() {
      return this.searchEntries.length <= 0 ? this.entries : this.searchEntries;
    },

    sortByColumn(column) {
      this.sortCol();
      return (this.filteredEntries = $.array.sortBy(
        this.filteredEntries,
        column,
        this.sort
      ));
    },

    sortCol() {
      if (this.sort === "") {
        this.sort = "asc";
      }
      if (this.sort === "asc") {
        this.sort = "desc";
      } else {
        this.sort = "asc";
      }
    },
  },
};
</script>
