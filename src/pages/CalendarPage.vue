<template>
    <div class="container mx-auto">
        <div class="my-12 font-bold">{{ now }}</div>
        <div class="grid grid-rows-5 grid-cols-7 grid-flow-row gap-4">
            <div v-for="(weekday, index) in weekdays" :key="index">
                {{ weekday }}
            </div>
            <div
                class="border h-24 w-24 grid justify-items-center items-center hover:bg-blue-500 hover:text-white hover:font-bold cursor-pointer"
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
};
</script>
