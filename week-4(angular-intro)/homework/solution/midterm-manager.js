var myApp = angular.module('midtermManager', []);
var globalId = 4;
myApp.controller('managerController', function($scope) {
  
  $scope.groups = [
    {
      id: 1,
      name: "Socket.io", 
      description: "Dadadadada",
      members: ["Christoph", "Adam"],
      tasks: [{description: "Fill the description", done: false, assignedTo: "Christoph"}, {description: "Log stuff", done: true, assignedTo: "Adam"}]
    },
    {
      id: 2,
      name: "Express", 
      description: "Express is cool", 
      members: ["Jacob"], 
      tasks: [{description: "Problem 1", done: true, assignedTo: "Jacob"}]
    },
    {
      id: 3,
      name: "MongoDB", 
      description: "Databases are cool", 
      members: ["Gabriel"], 
      tasks: [{description: "Do work", done: false, assignedTo: "Gabriel"}]}
    ];
    
    $scope.addGroup = function() {
      $scope.groups.push({
        id: globalId++,
        name: $scope.groupName, 
        description: $scope.groupDescription,
        members: [],
        tasks: []
      });
      $scope.groupName = "";
      $scope.groupDescription = "";
    };
    
    $scope.deleteGroup = function(gName) {
      console.log(gName);
      var groupName = gName.name;
      console.log(gName);
      var index = 0;
      var i;
      angular.forEach($scope.groups, function(group) {
        if (group.name === groupName) {
          i = index;
        }
        index++;
      });
      $scope.groups.splice(i, 1);
    };
    
    $scope.addStudent = function() {
      var studentName = $scope.studentName;
      console.log("studentName: " + studentName);
      var addStudentGroupName = $scope.addStudentGroupName.name;
      console.log("groupName: " + addStudentGroupName);
      $scope.groups.forEach(function(group) {
        if (group.name == addStudentGroupName) {
          group.members.push(studentName);
        }
      });
      $scope.studentName = "";
      $scope.addStudentGroupName = "";
    };
    
    $scope.deleteMember = function(groupId, memberName) {
      var oldMembers;
      angular.forEach($scope.groups, function(group) {
        if (group.id === groupId) {
          oldMembers = group.members;
          group.members = [];
          angular.forEach(oldMembers, function(member) {
            if (member !== memberName) {
              group.members.push(member);
            }
          });
        }
      });

      
    };
    
    $scope.remainingTasks = function(groupId) {
      var count = 0;
      var tasks;
      angular.forEach($scope.groups, function(group) {
        if (group.id === groupId) {
          tasks =  group.tasks;  
        }
      });
      
      angular.forEach(tasks, function(task) {
        count += task.done ? 0 : 1;
      });
      
      return count;
    };

    $scope.numberOfGroups = function() {
      var count = 0;
      angular.forEach($scope.groups, function(group) {
        count++;
      });
      return count;
    };
    
    $scope.addTaskFunction = function() {
      var task = $scope.addTask;
      var groupId = $scope.addTaskGroupName.id;
      angular.forEach($scope.groups, function(group) {
        if (group.id === groupId) {
          group.tasks.push({description: task, done: false, assignedTo: "nobody"});          
        }
      });
      $scope.addTask = "";
      $scope.addTaskGroupName = "";
    };
    
    $scope.deleteTask = function(groupId, taskName) {
      var oldTasks;
      angular.forEach($scope.groups, function(group) {
        if (group.id === groupId) {
          oldTasks = group.tasks;
          group.tasks = [];
          angular.forEach(oldTasks, function(task) {
            if (task.description !== taskName) {
              group.tasks.push(task);
            }
          });
        }
      });    
    };
    
  });