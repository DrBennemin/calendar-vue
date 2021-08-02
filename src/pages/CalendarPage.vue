<template>
    <div class="container mx-auto">
        <div class="flex justify-between my-12">
            <div class="font-bold">
                {{ now }}
            </div>
            <div class="flex">
                <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500 mr-4" v-on:click="monthPrev += 1">Prev</button>
                <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500" v-on:click="monthNext += 1">Next</button>
                <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500" v-on:click="counter += 1">Counter</button>
                <p>{{ counter }}</p>
            </div>
        </div>
        <div class="grid grid-rows-5 grid-cols-7 grid-flow-row gap-6">
            <div v-for="(weekday, index) in weekdays" :key="index" class="grid justify-around">
                {{ weekday }}
            </div>
            <div
                class="border max-h-24 max-w-24 grid justify-items-center items-center  hover:bg-blue-500 hover:text-white hover:font-bold cursor-pointer"
                v-for="(date, index) in dates"
                :key="index"
                @click="pickDate($event)"
            >
                {{ date }}
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";

export default {
    data() {
        return {
            weekdays: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
            months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            dates: null,
            now: null,
            counter: null,
            // switchMonth: 1,
        };
    },
    created() {
        this.now = dayjs().format("MMMM YYYY");
        for (let i = 0; i < dayjs().daysInMonth() + 1; i++) {
            this.dates = i;
        }
    },
    // updated: function() {
    //     this.now = dayjs().format("MMMM YYYY");
    // },
    methods: {
        monthPrev: function() {
            this.counter = dayjs()
                .subtract(this.counter, "month")
                .format("MMMM YYYY");
            // for (let i = 0; i < 100; i++) {
            //     this.now = dayjs()
            //         .subtract(i, "month")
            //         .format("MMMM YYYY");
            // }
            // this.now = dayjs()
            //     .subtract(1, "month")
            //     .format("MMMM YYYY");
            // let newValue = this.switchMonth++;
            // newValue = this.switchMonth;
            // this.now = dayjs()
            //     .subtract(newValue, "month")
            //     .format("MMMM YYYY");
            // console.log(
            //     dayjs()
            //         .subtract(newValue, "month")
            //         .format("MMMM YYYY")
            // );
        },
        monthNext: function() {
            this.counter = dayjs()
                .add(this.counter, "month")
                .format("MMMM YYYY");
            // let newValue = this.switchMonth++;
            // newValue = this.switchMonth;
            // this.now = dayjs()
            //     .add(newValue, "month")
            //     .format("MMMM YYYY");
            // console.log(
            //     dayjs()
            //         .add(newValue, "month")
            //         .format("MMMM YYYY")
            // );
        },
        pickDate: function(event) {
            alert(`Du hast auf den ${event.target.innerText}.ten geklickt`);
        },
    },
};
</script>
