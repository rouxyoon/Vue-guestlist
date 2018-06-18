new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName:[]
    },
    methods: {
        formSubmitted: function() {
            if(this.newNameText.length > 0) { // 입력값이 없는 상태에서 제출도었을 때 카드생성 방지
                this.guestName.push(this.newNameText)
                this.newNameText = '' // 입력값이 제출된 후 빈 값으로 만들기
            }
        }
    }
});
