function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  ul.insertAdjacentHTML('afterbegin',
                        friends.map(({firstName, lastName}) => `<li>${firstName} ${lastName}</li>`)
                               .join('')
                        );
  return ul;
}
