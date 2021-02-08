let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(meet = 0) {
        this.meetings = this.meetings + meet;
    },

    doneMeeting: function(meet = 0) {
        this.meetDone = this.meetDone + meet;
    },

    summary: function() {
        return `You have ${this.meetings} meetings and ${this.meetDone} meetings done!`;
    }
}

myTodos.addMeeting(4);

//Assignment
myTodos.doneMeeting(2);
console.log(myTodos.summary());