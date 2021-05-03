function camelize(str) {
  return str.split('-')
            .map((item, index) => (item && index) ? item[0].toUpperCase() + item.slice(1) : item)
            .join('');
}
