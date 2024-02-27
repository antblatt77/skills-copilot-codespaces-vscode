function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    member: function (member, context) {
      return member.skills;
    }
  };
}