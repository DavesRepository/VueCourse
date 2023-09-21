const app = Vue.createApp({
  data() {
    return {
      person: {
        name: 'Dave',
        age: this.calculateAge('1980-01-08'),
        ageIn5Years: this.calculateAge('1980-01-08') + 5,
        randomFavoriteNumber: this.createRandomFavoriteNumber(),
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=574&q=80'
      }
    }
  },
  methods: {
    calculateAge(birthDate) {
      const currentDate = new Date();
      const birthDateObj = new Date(birthDate);

      const yearsDiff = currentDate.getFullYear() - birthDateObj.getFullYear();
      const monthsDiff = currentDate.getMonth() - birthDateObj.getMonth();
      const daysDiff = currentDate.getDate() - birthDateObj.getDate();

      if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        return yearsDiff - 1;
      } else {
        return yearsDiff;
      }
    },
    createRandomFavoriteNumber(){
      return Math.round(Math.random()*100)+1;
    }
  }
});

app.mount('#assignment')
