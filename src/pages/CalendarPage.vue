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
    </div>
</template>

<script>
import dayjs from "dayjs";
// import weekday from "dayjs";

export default {
    data() {
        return {
            weekdays: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
            months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            dates: [],
            prevDates: null,
            nextDates: null,
            startOfMonth: null,
            now: null,
            today: null,
            monthNav: null,
            firstDayOfMonth: null,
            prevMonths: null,
            daysInMonth: [],
            // nextMonth: null,

            // prevLastDayOfMonth: null,
        };
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

        // for (
        //     let i = 0;
        //     i <
        //     dayjs("03-01-2021")
        //         .startOf("month")
        //         .format("d") -
        //         1;
        //     i++
        // ) {
        //     this.prevDates.push(i);
        //     console.log(this.prevDates[0]);
        // }

        // this.firstDayOfMonth =
        //     dayjs("07-01-2021")
        //         .startOf("month")
        //         .format("d") - 1;

        // this.firstDayOfMonth.forEach((day) => {
        //     day - 1;
        // });

        // for (let i = 0; i < 31 + 1; i++) {
        //     this.daysInMonth.push(i);
        // }
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
        // if (this.today === 4) {
        //     console.log("geiles schwein");
        // }
        // console.log(thisDay);
        // thisDay.classList.add("bg-blue-500", "text-white");
        // let thisDay = this.dates[this.today - 1];
        // this.dates.forEach(function(days) {
        //     let thisDay = this.dates[this.today - 1];
        //     console.log(days);
        //     console.log(thisDay);
        //     let todayClass = document.querySelector(".days");
        //     todayClass.classList.add("bg-blue-500", "text-white");
        // });
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
            // if (this.startOfMonth(this.now) == 0) {
            //     this.startOfMonth = "7";
            // }
            // for (let i = 1; i < this.startOfMonth(this.now); i++) {
            //     this.prevDates = i;
            // }
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
        // showTodaysDate: function() {
        //     let today = document.querySelector(".days");
        //     console.log(today);
        //     if (this.dates === this.today) {
        //         today.classList.add("bg-blue-500");
        //     }
        // },
        // ich will herausfinden mit welchem tag der monat startet (0-6) auf dieser grundlage dann eine subtraktion um heraus zu finden wie viele divs über die dafür angelegte for-schleife vor dem monats ersten gebaut werden müssen
        // Dazu muss ich erstmal herausfinden wie ich überhaupt noch divs vor uns nach dem monats ersten in das grid einfügen kann.
        //Dann brauche ich eine möglichkeit die for-schleife der 31 tage des monats zu durchsuchen und abzugleichen mit dem heutigen tag, damit ich dann die klasse an den heutigen hinzufügen kann.
    },
};
</script>
