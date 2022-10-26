<template>
    <div class="mb-5">
        <div class="flex items-center mb-1">
            <input :id="label" v-model="isSelected" :disabled="disabled" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300">
            <label :for="label" class="ml-[10px] w-full text-base text-primary">{{label}}</label>
        </div>
        <p class="text-base text-primary">
            {{text}}
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";


const props = defineProps({
    disabled: { type: Boolean, default: false },
    label: { type: String },
    text: { type: String },
    modelValue: { type: Boolean }
})

const isSelected = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);
watch(isSelected, () => emit('update:modelValue', isSelected.value))

</script>