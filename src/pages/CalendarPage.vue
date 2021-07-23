<template>
    <div class="container mx-auto">
        <div class="flex justify-between my-12">
            <div class="font-bold">
                {{ now }}
            </div>
            <div class="flex">
                <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500 mr-4" v-on:click="monthBack()">Back</button>
                <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500" v-on:click="monthNext()">Next</button>
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
        };
    },
    created() {
        for (let i = 0; i < 31; i++) {
            this.dates = i;
        }
        this.now = dayjs().format("MMMM YYYY");
    },
    methods: {
        monthBack: () => {
            console.log(dayjs().subtract(1, "month"));
        },
        monthNext: () => {
            let actualMonth = dayjs();
            do {
                let newMonth = actualMonth.add(1, "month");
                console.log(newMonth);
            } while (actualMonth < 12);
        },
    },
};
</script>
