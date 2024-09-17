export class Libro {
    constructor(
        public id: number = Math.floor(Math.random() * 100),
        public title: String = "",
        public author: String = "",
        public genre: String = "",
        public publishedYear: String =""

    )
    {

    }
}
