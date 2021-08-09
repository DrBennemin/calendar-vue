<template>
    <div class="grid grid-rows-5 grid-cols-7 grid-flow-row gap-6">
        <div v-for="(weekday, index) in weekdays" :key="index" class="grid justify-around">
            {{ weekday }}
        </div>
        <div v-for="(prevDate, index) in prevDates" :key="index" class="prev-day max-h-24 max-w-24 grid justify-items-center items-center text-white">
            {{ prevDate }}
        </div>
        <div
            class="days border max-h-24 max-w-24 grid justify-items-center items-center  hover:bg-blue-500 hover:text-white hover:font-bold cursor-pointer"
            v-for="(date, index) in dates"
            :key="index"
            @click="pickDate($event)"
        >
            {{ date }}
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";

export default {
    data() {
        return {
            dates: [],
            weekdays: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
            prevDates: null,
            startOfMonth: null,
        };
    },
    created() {
        this.now = dayjs().format("MMMM YYYY");
        this.today = dayjs().format("D");
        for (let i = 1; i < dayjs().daysInMonth() + 1; i++) {
            this.dates.push(i);
        }
        let startOfMonth = dayjs()
            .startOf("month")
            .format("d");

        if (startOfMonth == 0) {
            startOfMonth = "7";
        }

        for (let i = 1; i < startOfMonth; i++) {
            this.prevDates = i;
        }
    },
};
</script>
