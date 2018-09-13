<template>
    <section class="mobile-phone--wrapper">
        <!-- <div class="mobile-phone--earpiece"></div>
        <div class="mobile-phone--camera"></div> -->
        <div class="mobile-phone--screen">
            <div class="inner">
                <slot></slot>
            </div>
        </div>
        <!-- <div class="mobile-phone--home-button"></div> -->
    </section>
</template>

<script>
export default {
    name: 'frame',
};
</script>

<style>
.inner {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 16px;
}
/* .mobile-phone--wrapper {
    height: 537px;
    max-width: 95%;
    width: 290px;
    background: black;
    position: relative;
    border-radius: 20px;
    margin-top: 16px;
} */
.is-landscape {
    transform: rotate(90deg);
    margin-left: calc(537px/4);
    margin-top: calc(-290px/4);
}
.mobile-phone--earpiece {
    position: absolute;
    height: 2px;
    width: 60px;
    border-radius: 3px;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    border: solid 2px rgba(255,255,255,0.3);
}
.mobile-phone--camera {
    position: absolute;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    top: 7px;
    left: 30%;
}
.mobile-phone--screen {
    /* position: absolute; */
    /* top: 20px;
    left: 50%; */
    /* height: 480px;
    width: 270px; */
    height: 300px;
    width: 533px;
    border: solid 2px #cfcfcf;
    max-width: 95%;
    background: #fff;
    /* transform: translateX(-50%); */
    border-radius: 4px;
    overflow: hidden;
}
.mobile-phone--home-button {
    position: absolute;
    height: 20px;
    width: 60px;
    border-radius: 10px;
    bottom: 7px;
    left: 50%;
    transform: translateX(-50%);
    border: solid 2px rgba(255,255,255,0.3);
}
</style>

