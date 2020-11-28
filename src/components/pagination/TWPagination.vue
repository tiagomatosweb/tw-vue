<template>
    <div class="flex items-center justify-center my-3">
        <div class="flex-1 flex justify-between sm:hidden">
            <button
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-blue-gray-300 text-sm leading-5 font-medium rounded-md text-blue-gray-700 bg-white hover:text-blue-gray-500 focus:outline-none  focus:border-blue-300 active:bg-blue-gray-100 active:text-blue-gray-700 transition ease-in-out duration-150"
                @click.stop.prevent="prev()"
            >
                Previous
            </button>

            <button
                type="button"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-blue-gray-300 text-sm leading-5 font-medium rounded-md text-blue-gray-700 bg-white hover:text-blue-gray-500 focus:outline-none  focus:border-blue-300 active:bg-blue-gray-100 active:text-blue-gray-700 transition ease-in-out duration-150"
                @click.stop.prevent="next()"
            >
                Next
            </button>
        </div>

        <div class="hidden sm:inline-flex inline-flex shadow-sm">
            <TWPaginatorArrow
                :disabled="currentPage === 1"
                @click.stop.prevent="prev()"
            />

            <TWPaginatorPage
                v-for="(pg, index) in pagesRage"
                :key="index"
                :disabled="pg.disabled"
                :active="currentPage === pg.value"
                @click.stop.prevent="changePage(pg.value)"
            >
                {{ pg.value }}
            </TWPaginatorPage>

            <TWPaginatorArrow
                next
                :disabled="currentPage === totalPages"
                @click.stop.prevent="next()"
            />
        </div>
    </div>
</template>

<script>
    import TWPaginatorArrow from './TWPaginatorArrow';
    import TWPaginatorPage from './TWPaginatorPage';

    export default {
        name: 'TWPagination',

        components: {
            TWPaginatorArrow,
            TWPaginatorPage,
        },

        props: {
            currentPage: {
                type: Number,
                default: 1,
            },
            perPage: {
                type: Number,
                default: 0,
            },
            total: {
                type: Number,
                default: 0,
            },
            limit: {
                type: Number,
                default: 3,
            },
            pageNumberLimit: {
                type: Number,
                default: 0,
            },
            nextLabel: {
                type: String,
                default: undefined,
            },
            previousLabel: {
                type: String,
                default: undefined,
            },
        },

        computed: {
            totalPages() {
                const total = parseInt(this.total);
                const perPage = parseInt(this.perPage);
                const output = Math.ceil(total / perPage);

                // Fix the number of pages based on props
                if (this.pageNumberLimit && output > this.pageNumberLimit) {
                    return this.pageNumberLimit;
                }

                return output < 1 ? 1 : output;
            },

            pagesRage() {
                const total = this.totalPages;
                const range = [];
                const gap = this.limit;
                const before = this.currentPage - gap;
                const after = this.currentPage + gap;
                const pages = [];

                // eslint-disable-next-line
                for (let i = 1; i <= total; i++) {
                    if (i === 1 || i === total || (i >= before && i <= after)) {
                        range.push({
                            id: i,
                            value: i,
                            disabled: false,
                        });
                    }
                }

                range.forEach((item, index) => {
                    pages.push(item);

                    const nextIndex = index + 1;

                    if (nextIndex <= range.length - 1) {
                        if (item.id + 1 !== range[nextIndex].id) {
                            pages.push({
                                id: `${item.id}_ellipsis`,
                                value: '...',
                                disabled: true,
                            });
                        }
                    }
                });

                return pages;
            },

            currentPageObject() {
                const output = this.pagesRage.filter(o => o.id === this.currentPage);
                return output.length ? output[0] : {};
            },
        },

        methods: {
            changePage(page) {
                if (typeof page === 'number') {
                    this.$emit('change', page);
                }
            },

            prev() {
                if (this.currentPage !== 1) {
                    this.changePage(this.currentPageObject.id - 1);
                }
            },

            next() {
                if (this.currentPage < this.totalPages) {
                    this.changePage(this.currentPageObject.id + 1);
                }
            },
        },
    };
</script>

<style
    lang="scss"
    scoped
>
    .vue-pagination-item {
        align-items: center;
        display: flex;
        font-weight: normal;
        justify-content: center;
        margin: 0 2.5px;

        .vue-pagination-link {
            align-items: center;
            background-color: #fff;
            border: 1px solid #e4e5eb;
            border-radius: 6px;
            color: #69788a;
            display: flex;
            font-size: 16px;
            justify-content: center;
            line-height: 10px;
            min-height: 30px;
            min-width: 30px;
            padding: 15px 18px;
            text-decoration: none;

            &.vue-pagination-link-next,
            &.vue-pagination-link-prev {
                font-size: 14px;
                font-weight: bold;
                padding: 15px 18px;
                text-transform: uppercase;
            }
        }

        &.disabled {
            .vue-pagination-link {
                cursor: default;
                opacity: 0.5;
            }
        }

        &.is-active,
        &:hover:not(.disabled) {
            .vue-pagination-link {
                background-color: blue;
                border-color: blue;
                color: #fff;
                text-decoration: none;
            }
        }
    }
</style>
