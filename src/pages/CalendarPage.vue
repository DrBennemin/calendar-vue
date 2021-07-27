<template>
    <div class="container mx-auto">
        <div class="flex justify-between my-12">
            <div class="font-bold">
                {{ now }}
            </div>
            <div class="flex">
                <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500 mr-4" v-on:click="monthBack">Back</button>
                <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500" v-on:click="monthNext">Next</button>
            </div>
        </div>
        <div class="grid grid-rows-5 grid-cols-7 grid-flow-row gap-6">
            <div v-for="(weekday, index) in weekdays" :key="index" class="grid justify-around">
                {{ weekday }}
            </div>
            <div
                class="border max-h-24 max-w-24 grid justify-items-center items-center hover:bg-blue-500 hover:text-white hover:font-bold cursor-pointer"
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
            nav: 1,
        };
    },
    created() {
        for (let i = 0; i < 31; i++) {
            this.dates = i;
        }
        this.now = dayjs().format("MMMM YYYY");
        this.dates = dayjs(this.now).daysInMonth();
    },
    methods: {
        monthBack: function() {
            if (this.nav <= 2) {
                this.nav = 1;
                let newNav = this.nav++;
                this.now = dayjs()
                    .subtract(newNav, "month")
                    .format("MMMM YYYY");
                console.log(
                    dayjs()
                        .subtract(newNav, "month")
                        .format("MMMM YYYY")
                );
            } else {
                let newNav = this.nav++;
                this.now = dayjs()
                    .subtract(newNav, "month")
                    .format("MMMM YYYY");
                console.log(
                    dayjs()
                        .subtract(newNav, "month")
                        .format("MMMM YYYY")
                );
            }
        },
        monthNext: function() {
            if (this.nav <= 2) {
                // wenn nav größer als 2 dann setz nav zurück und addiere wieder pro klick einen drauf, aber die scheiße geht nich
                this.nav = 1;
                let newNav = this.nav++;
                this.now = dayjs()
                    .add(newNav, "month")
                    .format("MMMM YYYY");
                console.log(
                    dayjs()
                        .add(newNav, "month")
                        .format("MMMM YYYY")
                );
            } else {
                let newNav = this.nav++;
                this.now = dayjs()
                    .add(newNav, "month")
                    .format("MMMM YYYY");
                console.log(
                    dayjs()
                        .add(newNav, "month")
                        .format("MMMM YYYY")
                );
            }
        },
        pickDate: function(event) {
            alert(`Du hast auf den ${event.target.innerText}.ten geklickt`);
        },
    },
};
</script>
