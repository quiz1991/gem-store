(function() {
  var app = angular.module("gemStore-directives", []);

  app.directive("productTitle", function() {
    return {
      restrict: 'E',
      templateUrl: "templates/product-title.html"
    };
  }); 

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "templates/product-description.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'E',
      templateUrl: "templates/product-specs.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "templates/product-reviews.html"
    };
  });

  app.directive("productPanels", function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-panels.html',
      controller: function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });

  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-gallery.html',
      controller: function() {
        this.current = 0;

        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productReviewsForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-reviews-form.html',
      controller: function() {
        this.review = {};

        this.addReview = function(product) {
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });

})();