<template>
    <span
        role="checkbox"
        tabindex="0"
        :aria-hidden="short ? false : true"
        :aria-checked="isOn"
        :class="classList"
        @click="changeActive()"
    >
        <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
        <!-- On: "translate-x-5", Off: "translate-x-0" -->
        <span
            aria-hidden="true"
            :class="bodyClassList"
        >
            <!-- On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" -->
            <span
                v-if="icon"
                :class="iconClassList"
            >
                <svg
                    class="h-3 w-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 12 12"
                >
                    <path
                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </span>
            <!-- On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" -->
            <span 
                v-if="icon"
                :class="iconClassListActive"
            >
                <svg
                    class="h-3 w-3 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                >
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                </svg>
            </span>
        </span>
    </span>
</template>

<script>
    export default {
        name: 'TwToggle',

        components: {
            // TwBadge,
        },

        props: {
            short: {
                type: Boolean,
                default: false,
            },

            simple: {
                type: Boolean,
                default: false,
            },

            icon: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                isOn: false,
            };
        },

        computed: {
            classList() {
                return [
                    this.getDefaultClass,
                    this.getSimpleClass,
                    this.getShondowClass,
                    this.getActiveClass,
                    this.getShortClass,
                ];
            },

            getActiveClass() {
                return this.isOn ? 'bg-indigo-600' : 'bg-gray-200';
            },

            bodyClassList(){
                return [
                    this.getDefaultBodyClass,
                    this.getDefaultActive,
                    this.getBodyActiveClass,
                    this.getShortBodyClass,
                    this.getSimpleBodyClass,
                ];
            },

            getDefaultClass() { 
                return !this.simple && !this.short ? 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline' : '';
            },

            getDefaultBodyClass() { 
                return !this.simple && !this.short ? 'inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200' : '';
            },

            getDefaultActive(){
                return this.isOn;
            },

            getSimpleClass() {
                return this.simple ? 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline' : '';
            },

            getSimpleBodyClass() {
                return this.simple ? 'inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200' : '';
            },

            getShondowClass() {
                return this.short ? 'group relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none' : '';
            },

            getBodyActiveClass(){
                return this.isOn ? 'translate-x-5' : 'translate-x-0';
            },
      
            getShortClass() {
                return this.short ? 'absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200' : '';
            },
    
            getShortBodyClass() {
                return this.short ? 'absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200' : '';
            },

            iconClassList() {  
                return [
                    this.getIconClass,
                    this.getIcoDeactiveClass,
                ];
            },

            iconClassListActive() {  
                return [
                    this.getIconClass,
                    this.getIcoActiveClass,
                ];
            },

            getIcoDeactiveClass(){
                return this.isOn ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200';
            },

            getIcoActiveClass(){
                return this.isOn ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100';
            },


            getIconClass() {
                return this.icon ? 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity' : '';
            },
        },

        methods: {
            changeActive(){
                this.isOn = !this.isOn;
            },
        },
    };
</script>
