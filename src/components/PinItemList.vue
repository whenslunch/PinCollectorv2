<template>
    <div>
        <ul>
            <li v-for="pin in pins" :key="pin.itemNumber">
                <img :src="'https://collections-svc-dn.azurewebsites.net/api/GetImage/'+pin.itemNumber" style="height:10%;" />
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
            images: [],
        };
    },
    async created() {
        await this.loadPins();
        await this.loadImages();
    },
    methods: {
        async loadPins() {

            this.pins = await dataprovider.getPinData();

        },
        async loadImages() {

            this.pins.map( (pin) => {
                this.images[pin.itemNumber] = dataprovider.getPinImage(pin.itemNumber);
            })

        }
    },
};
</script>

<style scoped>
</style>


