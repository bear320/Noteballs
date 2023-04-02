import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxChars = 100) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length === maxChars) {
            alert(`輸入內容已達上限（${maxChars} 字元數）`);
        }
    });
}
