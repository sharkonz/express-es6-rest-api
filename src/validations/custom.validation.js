const websiteId = (value, helpers) => {
    if (!value.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)) {
        return helpers.message('"{{#label}}" must be a valid website url');
      }
      return value;
    }
    
  module.exports = {
    websiteId,
  };