<template>
    <section>
        <div class="olt-button is-raised--primary-01" @click="open = true">Open Fullscreen Modal</div>
        <div class="olt-button is-raised--primary-01" @click="openClassic = true">Open Classic Modal</div>
        <section>
            <div class="olt-modal olt-modal--fullscreen" :class="{'olt-modal--is-open': open}">
                <button class="olt-modal__close-button" @click="open = false">
                    <i class="material-icons">close</i>
                </button>
                <div class="olt-modal__content">
                    <div class="olt-modal__content--inner">
                        <div class="olt-copy--l">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        </div>
                    </div>
                </div>
            </div>
            <div class="olt-modal__backdrop"></div>
        </section>
        <section>
            <div class="olt-modal" :class="{'olt-modal--is-open': openClassic}">
                <div class="olt-modal__content">
                    <div class="olt-headline--s">Oh No! A Devicee</div>
                    <div class="olt-copy--l">You should really check the configuration</div>
                </div>
                <div class="olt-modal__actions">
                    <button class="olt-button is-raised--primary-01" @click="openClassic = false">Yes, show me</button>
                </div>
            </div>
            <div class="olt-modal__backdrop" @click="openClassic = false"></div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'fullscreen-modal',

    data() {
        return {
            open: false,
            openClassic: false,
        };
    },

    watch: {
        open(newVal, oldVal) {
            if (newVal) {
                document.documentElement.classList.add('olt-modal--in-body-open-fullscreen');
            } else {
                document.documentElement.classList.remove('olt-modal--in-body-open-fullscreen');
            }
        },
    },
};
</script>
