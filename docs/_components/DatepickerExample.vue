<template>
    <section>
        <div class="olt-datepicker" :class="{'olt-datepicker--is-open': open}">
            <div class="olt-textfield__wrapper has-icon is-fullwidth">
                <input class="olt-textfield__input" id="input-with-icon" v-model="date" name="input" @click="open = !open" readonly/>
                <label class="olt-textfield__input-label" for="input-with-icon">Start Date</label>
                <i class="olt-textfield__input-icon material-icons">event</i>
            </div>
            <div class="olt-datepicker__panel">
                <div class="olt-datepicker__panel-header">
                    <div class="olt-datepicker__month-year-switch">
                        <div class="olt-datepicker__month-switch">
                            <span class="material-icons">chevron_left</span>
                        </div>
                        <div class="olt-select__wrapper olt-datepicker__year-select">
                            <span>Jan</span>
                            <select class="olt-select" name="select">
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                        <div class="olt-datepicker__month-switch">
                            <span class="material-icons">chevron_right</span>
                        </div>
                    </div>
                    <div class="olt-datepicker__day-header">
                        <div class="olt-datepicker__day-header-item">M</div>
                        <div class="olt-datepicker__day-header-item">D</div>
                        <div class="olt-datepicker__day-header-item">M</div>
                        <div class="olt-datepicker__day-header-item">D</div>
                        <div class="olt-datepicker__day-header-item">F</div>
                        <div class="olt-datepicker__day-header-item">S</div>
                        <div class="olt-datepicker__day-header-item">S</div>
                    </div>
                </div>
                <div class="olt-datepicker__panel-content">
                    <div class="olt-datepicker__day-selection">
                        <div class="olt-datepicker__day-select olt-datepicker__day-select--is-active" @click="open = false">1</div>
                        <div class="olt-datepicker__day-select" @click="open = false">2</div>
                        <div class="olt-datepicker__day-select" @click="open = false">3</div>
                        <div class="olt-datepicker__day-select" @click="open = false">4</div>
                        <div class="olt-datepicker__day-select" @click="open = false">5</div>
                        <div class="olt-datepicker__day-select" @click="open = false">6</div>
                        <div class="olt-datepicker__day-select" @click="open = false">7</div>
                        <div class="olt-datepicker__day-select" @click="open = false">8</div>
                        <div class="olt-datepicker__day-select" @click="open = false">9</div>
                        <div class="olt-datepicker__day-select" @click="open = false">10</div>
                        <div class="olt-datepicker__day-select" @click="open = false">11</div>
                        <div class="olt-datepicker__day-select" @click="open = false">12</div>
                        <div class="olt-datepicker__day-select" @click="open = false">13</div>
                        <div class="olt-datepicker__day-select" @click="open = false">14</div>
                        <div class="olt-datepicker__day-select" @click="open = false">15</div>
                        <div class="olt-datepicker__day-select" @click="open = false">16</div>
                        <div class="olt-datepicker__day-select" @click="open = false">17</div>
                        <div class="olt-datepicker__day-select" @click="open = false">18</div>
                        <div class="olt-datepicker__day-select" @click="open = false">19</div>
                        <div class="olt-datepicker__day-select" @click="open = false">20</div>
                        <div class="olt-datepicker__day-select" @click="open = false">21</div>
                        <div class="olt-datepicker__day-select" @click="open = false">22</div>
                        <div class="olt-datepicker__day-select" @click="open = false">23</div>
                        <div class="olt-datepicker__day-select" @click="open = false">24</div>
                        <div class="olt-datepicker__day-select" @click="open = false">25</div>
                        <div class="olt-datepicker__day-select" @click="open = false">26</div>
                        <div class="olt-datepicker__day-select" @click="open = false">27</div>
                        <div class="olt-datepicker__day-select" @click="open = false">28</div>
                        <div class="olt-datepicker__day-select" @click="open = false">29</div>
                        <div class="olt-datepicker__day-select" @click="open = false">30</div>
                        <div class="olt-datepicker__day-select" @click="open = false">31</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { OltTextfield } from '../../source';

export default {
    name: 'datepicker-example',

    data() {
        return {
            open: false,
            date: '1/1/2018'
        }
    },

    mounted() {
        Array.from(document.querySelectorAll(".olt-textfield__input")).map(x => new OltTextfield(x));
    }
}
</script>