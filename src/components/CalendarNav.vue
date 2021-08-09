<template>
    <div class="flex justify-between my-12">
        <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500 mr-4" v-on:click="monthPrev">Prev</button>
        <div class="font-bold">
            {{ now }}
        </div>
        <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500" v-on:click="monthNext">Next</button>
    </div>
</template>

<script>
import dayjs from "dayjs";

export default {
    data() {
        return {
            now: null,
            monthNav: null,
        };
    },
    created() {
        this.now = dayjs().format("MMMM YYYY");
    },
    methods: {
        monthPrev: function() {
            this.monthNav--;
            //prettier-ignore
            this.now = dayjs().add(this.monthNav, "month").format("MMMM YYYY");
            for (let i = 0; i < dayjs(this.now).daysInMonth() + 1; i++) {
                this.dates = i;
            }
            //prettier-ignore
            for (let i = 1; i < dayjs(this.now).startOf("month").format("d"); i++) {
                this.prevDates = i;
            }
        },
        monthNext: function() {
            this.monthNav++;
            this.now = dayjs()
                .add(this.monthNav, "month")
                .format("MMMM YYYY");
            for (let i = 0; i < dayjs(this.now).daysInMonth() + 1; i++) {
                this.dates = i;
            }
            //prettier-ignore
            for (let i = 1; i < dayjs(this.now).startOf("month").format("d"); i++) {
                this.prevDates = i;
            }
        },
    },
};
</script>
