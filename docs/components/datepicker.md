# Datepicker

:::warning
You have to implement the whole datepicker logic by your own. We only deliver basic styling of the datepicker-panel. To style a day as active you only have to
add the class `olt-datepicker__day-select--is-active` to the `olt-datepicker__day-select`. To set the panel as open you have to add the class `olt-datepicker--is-open` to the outer `olt-datepicker`.
:::

<datepicker-example></datepicker-example>

````html
<div class="olt-datepicker olt-datepicker--is-open">
    <div class="olt-textfield__wrapper has-icon is-fullwidth">
        <input class="olt-textfield__input" id="input-with-icon" name="input" readonly/>
        <label class="olt-textfield__input__label" for="input-with-icon">Select your date</label>
        <i class="olt-textfield__input-icon material-icons">event</i>
    </div>
    <div class="olt-datepicker__panel">
        <div class="olt-datepicker__panel-header">
            <div class="olt-datepicker__month-year-switch">
                <div class="olt-datepicker__month-switch">
                    <span><</span>
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
                    <span>></span>
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
            <div class="olt-datepicker__current-month">
                Januar
            </div>
            <div class="olt-datepicker__day-selection">
                <div class="olt-datepicker__day-select olt-datepicker__day-select--is-active">1</div>
                <div class="olt-datepicker__day-select">2</div>
                <div class="olt-datepicker__day-select">3</div>
                <div class="olt-datepicker__day-select">4</div>
                <div class="olt-datepicker__day-select">5</div>
                <div class="olt-datepicker__day-select">6</div>
                <div class="olt-datepicker__day-select">7</div>
                <div class="olt-datepicker__day-select">8</div>
                <div class="olt-datepicker__day-select">9</div>
                <div class="olt-datepicker__day-select">10</div>
                <div class="olt-datepicker__day-select">11</div>
                <div class="olt-datepicker__day-select">12</div>
                <div class="olt-datepicker__day-select">13</div>
                <div class="olt-datepicker__day-select">14</div>
                <div class="olt-datepicker__day-select">15</div>
                <div class="olt-datepicker__day-select">16</div>
                <div class="olt-datepicker__day-select">17</div>
                <div class="olt-datepicker__day-select">18</div>
                <div class="olt-datepicker__day-select">19</div>
                <div class="olt-datepicker__day-select">20</div>
                <div class="olt-datepicker__day-select">21</div>
                <div class="olt-datepicker__day-select">22</div>
                <div class="olt-datepicker__day-select">23</div>
                <div class="olt-datepicker__day-select">24</div>
                <div class="olt-datepicker__day-select">25</div>
                <div class="olt-datepicker__day-select">26</div>
                <div class="olt-datepicker__day-select">27</div>
                <div class="olt-datepicker__day-select">28</div>
                <div class="olt-datepicker__day-select">29</div>
                <div class="olt-datepicker__day-select">30</div>
                <div class="olt-datepicker__day-select">31</div>
            </div>
        </div>
    </div>
</div>
````