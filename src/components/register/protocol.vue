<template>
    <div>
        <Button type="primary" size='small' @click="modal1 = true">suixinday 会员协议</Button> 并且愿意接受旅游咨询免费信息 
        <Modal
            v-model="modal1"
            title="suixinday会员协议"
            @on-ok="ok"
            @on-cancel="cancel">
            <p>一、服务条款</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>二、目的</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>三、蹲守法律及法律效力</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </Modal>
    </div>
</template>

<script>
export default {
    name:'protocol',
    data () {
            return {
                modal1: false
            }
        },
    methods: {
        ok () {
        },
        cancel () {
        }
    }
}
</script>

<style scoped>

</style>

