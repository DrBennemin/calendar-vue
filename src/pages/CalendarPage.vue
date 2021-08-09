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
        <calendar-nav></calendar-nav>
        <calendar-item> </calendar-item>
    </div>
</template>

<script>
import dayjs from "dayjs";
import CalendarItem from "../components/CalendarItem.vue";
import CalendarNav from "../components/CalendarNav.vue";

export default {
    data() {
        return {
            weekdays: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
            months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            dates: [],
            prevDates: null,
            startOfMonth: null,
            now: null,
            today: null,
            monthNav: null,
            firstDayOfMonth: null,
        };
    },
    components: {
        CalendarItem,
        CalendarNav,
    },
    created() {
        this.now = dayjs().format("MMMM YYYY");
        this.today = dayjs().format("D");
        for (let i = 1; i < dayjs().daysInMonth() + 1; i++) {
            this.dates.push(i);
        }
        //prettier-ignore
        let startOfMonth = dayjs().startOf("month").format('d');

        if (startOfMonth == 0) {
            startOfMonth = "7";
        }

        for (let i = 1; i < startOfMonth; i++) {
            this.prevDates = i;
        }
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
        pickDate: function(event) {
            alert(`Du hast auf den ${event.target.innerText}.ten geklickt`);
        },
    },
};
</script>
