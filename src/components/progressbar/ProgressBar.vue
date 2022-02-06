<template>
    <div v-bind:class="rootClass" @mouseover="activeToolTip = true" @mouseleave="activeToolTip = false">
        <div
            v-bind:class="[percentageClass, getPercentageBarSize]"
            v-bind:style="`width: ${percentage}%`"
        ></div>
        <div v-show="activeToolTip == true" v-bind:class="getToolTipClass">
            <p v-bind:class="getPercentageBarSize">{{ percentage }}%</p>
        </div>
        <span v-bind:class="getPercentageText">{{ percentage }}%</span>
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
            activeToolTip: false
        };
    },
    props: {
        percentage: {
            type: String,
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
        }
    },
    computed: {
        rootClass() {
            return [this.fixedClass.root];
        },
        percentageClass(){
            return [this.fixedClass.percentage, this.variantClass.root];
        },
        getToolTipClass() {
            return [`-${this.direction}-8`, this.fixedClass.tooltip, this.variantClass.tooltip];
        },
        getPercentageBarSize() {
            return [this.sizeClass];
        },
        getPercentageText() {
            return [this.sizeClass, this.fixedClass.percentageText];
        }
    }
};
</script>
