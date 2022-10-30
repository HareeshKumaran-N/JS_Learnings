
const jamesBond2 = {
    firstName: "Daniel",
    lastName: "Craig",
    getFullName: function () {
      console.log("@AJ this", { current: this });
      return `${this.firstName} ${this.lastName}`;
    },
    newDetails: {
      firstName: "Tarun",
      company: "CES",
      getName: function () {
        console.log(this);
        return this.firstName;
      },
    },
  };

  console.log(jamesBond2.newDetails.getName());