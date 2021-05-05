function showSalary(users, age) {
  const lineFeed = '\n';
  return users.filter((item) => item.age <= age)
              .map(({name, balance} = {}, index, arr) => {

                if (!name || !balance) return;

                let salaryString = `${name}, ${balance}`;

                if (index !== arr.length - 1) salaryString += lineFeed;
                
                return salaryString;
              })
              .join('');
}