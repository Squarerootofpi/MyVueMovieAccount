// let app = new Vue({ //this refers to this whole vue object
//     el: '#app',
//     data: {
//         number: '', //Number of comic
//         max: '',
//         current: {
//             title: '', //of comic
//             img: '',
//             alt: '',
//         },
//         loading: true,
//         addedName: '',
//         addedComment: '',
//         comments: {},
//         ratings: {},
//     },

// )};
var APP = new Vue({
    el: '#APP',
    data: {
        inputTitle: "Star Wars",
        loading: false,
        results: false,
//  This is the data they have
        Title: '', 
        response: '',
        
    },
    watched:
    {
        // titleofInput() {

        // },
        watchinput() {
            if (inputTitle === "") {
                console.log("movietitenothing");
            }
        },
    },
    created()
    {
        console.log(this.loading);
        this.getMovie();
    },
    methods:
    {
        async getMovie() {
            this.loading = true;
            this.results = false;
            console.log("We are in getMovie");
            console.log(this.inputTitle);

            //Please note, this key is not to be copied without permission.
            //My friend Sean owns this key. 

            const theUrl = "https://www.omdbapi.com/?t=" + this.inputTitle + "&apikey=ae3a1bc8";
            console.log(theUrl);
            console.log(this.loading);
            const response = await axios.get(theUrl);
            this.data = response.data;
            console.log(response);
            this.loading = false;
            console.log(this.loading);

        },
        getResults()
        {
            this.results = true;
            console.log("Getting results: ", this.results);
        },
    },


});

