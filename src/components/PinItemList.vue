<template>
    <div>
        <ul>
            <li v-for="pin in pins" :key="pin.itemNumber">
                <img :src="'https://collections-svc-dn.azurewebsites.net/api/GetImage/'+pin.itemNumber"  />
                <h3> {{pin.city}} </h3>
                <p> {{pin.country}} </p>
            </li>
        </ul>
    </div>
</template>

<script>
import { dataprovider } from "../shared";

export default {
    name: 'PinItemList',
    data() {
        return {
            pins: [],
        };
    },
    async created() {
        await this.loadPins();
    },
    methods: {
        async loadPins() {

            this.pins = await dataprovider.getPinData();

        },
    },
};
</script>

<style scoped>
</style>


