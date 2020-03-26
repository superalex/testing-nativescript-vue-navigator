<template>
    <GridLayout rows="auto" columns="*, *, *">
        <Button text='c1' @tap="goTo('/route-1')" row="1" col="0" />
        <Button text='c2' @tap="goTo('/route-2')" row="1" col="1" />
        <Label :text="$navigator.path" col="2"/>
    </GridLayout>
</template>

<script>
    export default {
        methods: {
            goTo(name) {
                this.$navigator.navigate(name);
            }
        }
    };
</script>