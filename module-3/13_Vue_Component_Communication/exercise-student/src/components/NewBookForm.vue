<template>
  <form class="new-book-form" v-on:submit.prevent="addNewBook">
      <label for="title">Title: </label>
      <input type="text" id="title" class="title-input" v-model="newBook.title">
      <label for="author">Author: </label>
      <input type="text" id="author" class="author-input" v-model="newBook.author">
      <label for="isbn">ISBN: </label>
      <input type="text" id="isbn" class="isbn-input" v-model="newBook.isbn">
      <input type="submit">
  </form>
</template>
<script>
export default {
methods: {
    addNewBook() {
        this.$store.commit("ADD_NEW_BOOK", this.newBook)
        this.newBook = {read: false}
    }
},
data() {
    return {
        newBook: {
            read: false,
        }
    }
}
}
</script>
<style>
</style>