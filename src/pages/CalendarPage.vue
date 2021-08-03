<template>
    <div class="container mx-auto">
        <div class="flex justify-between my-12">
            <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500 mr-4" v-on:click="monthPrev">Prev</button>
            <div class="font-bold">
                {{ now }}
            </div>
            <button class="bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-red-500" v-on:click="monthNext">Next</button>
        </div>
        <div class="grid grid-rows-5 grid-cols-7 grid-flow-row gap-6">
            <div v-for="(weekday, index) in weekdays" :key="index" class="grid justify-around">
                {{ weekday }}
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
            today: null,
            monthNav: null,
            firstDayOfMonth: null,
            prevMonths: null,
            daysInMonth: [],
            // nextMonth: null,
            // prevDate: null,
            // prevLastDayOfMonth: null,
        };
    },
    created() {
        this.now = dayjs().format("MMMM YYYY");
        this.today = dayjs().format("D");
        for (let i = 0; i < dayjs().daysInMonth() + 1; i++) {
            this.dates = i;
        }
        for (let i = 0; i < 31 + 1; i++) {
            this.daysInMonth.push(i);
        }
        // if (this.i == this.today) {
        //     console.log("geil");
        //     let todayBackground = document.getElementsByClassName(".days");
        //     todayBackground.classList.add("bg-blue-500");
        // } else {
        //     this.dates = this.i;
        // }
        // this.firstDayOfMonth = dayjs()
        //     .set("date", 1)
        //     .format("d");
        // if (this.daysInMonth.includes(this.today) === this.today) {
        //     console.log("geil");
        //     let today = document.getElementsByClassName(".days");
        //     today.classList.add("bg-blue-500");
        // }
    },
    mounted() {
        let todayClass = document.querySelector(".days");
        if (this.today === this.today) {
            console.log("geiles schwein");
            todayClass.classList.add("bg-blue-500", "text-white");
        }
        console.log(this.today);

        let todaysDay = this.today;
        todaysDay.classList.add("bg-red-500");
        // if (this.dates) {
        // } else {
        // }
    },
    methods: {
        monthPrev: function() {
            this.monthNav--;
            this.now = dayjs()
                .add(this.monthNav, "month")
                .format("MMMM YYYY");
            for (let i = 0; i < dayjs(this.now).daysInMonth() + 1; i++) {
                this.dates = i;
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
        },
        pickDate: function(event) {
            alert(`Du hast auf den ${event.target.innerText}.ten geklickt`);
        },
        showTodaysDate: function() {
            let today = document.querySelector(".days");
            console.log(today);
            if (this.dates === this.today) {
                today.classList.add("bg-blue-500");
            }
        },
    },
};
</script>
