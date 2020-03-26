<template>
    <GridLayout class="App" rows="*, auto">
        <ContentView row="0">
            <Navigator defaultRoute="/route-1" />
        </ContentView>

        <nav row="1" />
    </GridLayout>
</template>

<script>
    import nav from "./nav";
    export default {
        components: {
            nav
        },
        data() {
            return {};
        }
    };
</script>
