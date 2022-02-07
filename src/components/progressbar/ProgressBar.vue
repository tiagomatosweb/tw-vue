<template>
    <div
        :class="rootClass"
        @mouseover="activeToolTip = true"
        @mouseleave="activeToolTip = false"
    >

        <div
            :class="[percentageClass, percentageBarClass]"
            :style="`width: ${percentage}%`"
        >
            <div :class="toolTipContainerClass">
                <span v-show="activeToolTip & directionData == 'mt'" :class="getToolTipClass">
                    {{tooltip}}
                </span>
               <p :class="percentageTextClass">{{ percentage }}% </p>
               <span v-show="activeToolTip & directionData == 'mb'" :class="getToolTipClass">
                    {{tooltip}}
                </span>

            </div>

        </div>
    </div>
</template>

<script>
import FixedMixin from "../../utils/FixedMixin";
import VariantMixin from "../../utils/VariantMixin";
import SizeMixin from "../../utils/SizeMixin";
export default {
    name: "ProgressBar",
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    data() {
        return {
            config: this.$TWVue.Progressbar,
            activeToolTip: false,
            directionData: 'mt'
        };
    },
    props: {
        percentage: {
            type: [String, Number],
            require: true
        },
        direction: {
            type: String,
            default() {
                return "top";
            },
            validator(value) {
                return ["bottom", "top"].indexOf(value) !== -1;
            }
        },
        tooltip: {
            type: [String, Number],
            default(){
                return `${this.percentage}%`
            }
        }
    },
    methods:{
        checkDirection(){
            if(this.direction == 'top'){
                this.directionData = 'mt'
            }else{
                this.directionData = 'mb'
            }

        }
    },
    computed:{
        rootClass(){
            return [this.fixedClass.root];
        },
        percentageClass(){

            return [this.fixedClass.percentage, this.variantClass.root];

        },
        getToolTipClass(){

            return [
                `-${this.directionData}-${this.sizeClass.tooltip}`,
                this.sizeClass.text,
                this.fixedClass.tooltip,
                this.variantClass.tooltip,
            ];
        },
        percentageBarClass(){
                return [this.sizeClass.bar];
        },
        percentageTextClass(){
            return [this.sizeClass.text, this.fixedClass.percentageText];
        },
        toolTipContainerClass(){
            return this.fixedClass.tooltipContainer
        }
    },
    created(){
        this.checkDirection()
    }
};
</script>
