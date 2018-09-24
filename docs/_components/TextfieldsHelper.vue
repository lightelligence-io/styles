<script>
import { OltTextfield } from '../../source/';

export default {
    name: 'textfields-helper',

    mounted() {
        // register lightelligence-ui--textfields
        Array.from(document.querySelectorAll(".olt-textfield__input")).map(x => new OltTextfield(x));
    },

    render() {
        return;
    }
};
</script>