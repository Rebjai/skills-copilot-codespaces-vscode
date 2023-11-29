function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/view/member.html',
        controller: 'SkillsMeberController',
        controlerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}