const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("basic").readAny("post");

  ac.grant("admin")
    .extend("basic")
    .updateAny("post")
    .deleteAny("post")
    .createAny("post");

  return ac;
})();
