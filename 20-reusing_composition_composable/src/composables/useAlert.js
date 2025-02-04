import { ref } from 'vue';
export default function useAlert() {
    const alert = ref(false);

    function showAlert() {
        alert.value = true;
    }

    function hideAlert() {
        alert.value = false;
    }

    return { alertIsVisible: alert, showAlert, hideAlert };
}