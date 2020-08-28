<template>
    <span
        role="checkbox"
        tabindex="0"
        :aria-hidden="simple"
        :aria-checked="isActive"
        :class="classList"
        @click="changeActive()"
    >
        <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
        <span
            :aria-hidden="!simple"
            :class="classList"
        >
            <!-- On: "translate-x-5", Off: "translate-x-0" -->
            <span
                aria-hidden="true"
                :class="bodyClassList"
            />
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
        },

        data() {
            return {
                isActive: false,
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
                return this.isActive ? 'bg-indigo-600' : 'bg-gray-200';
            },

            bodyClassList(){
                return [
                    this.getDefaultBodyClass,
                    this.getDefaultActive,
                    this.getBodyActiveClass,
                    this.getShordBodyClass,
                    this.getSimpleBodyClass,
                ];
            },

            getDefaultClass() { 
                return !this.simple && !this.short ? 'bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline' : '';
            },

            getDefaultBodyClass() { 
                return !this.simple && !this.short ? 'inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200' : '';
            },

            getDefaultActive(){
                return this.isActive;
            },

            getSimpleClass() {
                return this.simple ? 'bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline' : '';
            },
            
            getBodyActiveClass(){
                return this.isActive ? 'translate-x-5' : 'translate-x-0';
            },
          
            getShondowClass() {
                return this.short ? 'group relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none' : '';
            },

            getShortClass() {
                return this.short ? 'bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200' : '';
            },

            getSimpleBodyClass() {
                return this.simple ? 'inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200' : '';
            },

            getShordBodyClass() {
                return this.short ? 'absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200' : '';
            },

        },

        methods: {
            changeActive(){
                this.isActive = !this.isActive;
            },
        },
    };
</script>
