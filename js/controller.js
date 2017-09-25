//控制器模块
(function(angular) {
    var app = angular.module('todoApp.controller', []);
    /* 创建控制器 */
    app.controller('todoCtrl', ['$scope', function($scope) {
        /* 防止压缩'$scope' */
        /* 
        //查 增 删 改
        */



        /* 测试 */
        $scope.text = 'TodoMVC'

        //查
        $scope.todoList = [
            { status: true, text: 'angular' },
            { status: false, text: 'vue' },
            { status: true, text: 'css' },
            { status: false, text: 'html' },
        ];

        //增加
        //todo文本框  
        $scope.todoText = '';
        $scope.addTodo = function() {
            //增加todo  敲完回车后 把数据加到数组$scope.todoList 
            if ($scope.todoText.length > 0) {
                $scope.todoList.push({ status: false, text: $scope.todoText });
                //增加完成以后清空todoText
                $scope.todoText = '';
            }

            //console.log('我被触发了');
        };

        //删除
        $scope.deleteTodo = function(index) {
            console.log('删除todo', index);
            $scope.todoList.splice(index, 1)
        };

        //修改
        $scope.editTodo = function(todo) {
            $scope.editingTodoText = todo
                /* 双击修改的其实是样式 */
                //todo
            console.log('修改todo');
        }

        //失去焦点保存
        $scope.blurTodo = function() {
            $scope.editingTodoText = {};
        };


    }]);
})(angular);