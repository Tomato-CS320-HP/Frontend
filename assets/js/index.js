  $(document).ready(function(){
      console.log('Page has fully loaded')

      var values_to_load = {
        'large': [
          {
            'label': 'by Product Type',
            'id': 'product-type'
          },
          {
            'label': 'by Company',
            'id': 'company'
          },
          {
            'label': 'by Serial Number',
            'id': 'serial-number'
          }
        ],
        'statistical': [
          {
            'label': 'Read Speed',
            'id': 'read-speed'
          },
          {
            'label': 'Read Count',
            'id': 'read-count'
          },
          {
            'label': 'Write Speed',
            'id': 'write-count'
          },
          {
            'label': 'Write Count',
            'id': 'write-count'
          },
          {
            'label': 'Bandwidth',
            'id': 'bandwidth'
          },
          {
            'label': 'CPU',
            'id': 'cpu'
          }
        ]

      }

      var item;
      for(item in values_to_load.large) {
        var relevant = values_to_load.large[item];
        var s = "<li class='metric overall-metric' id='"+relevant.id+"'><a href='#'>"+relevant.label+"</a></li>";
        $('#large-metrics').append(s);
      }

      for(item in values_to_load.statistical) {
        var relevant = values_to_load.statistical[item];
        var s = "<li class='performance-metric overall-metric' id='"+relevant.id+"'><a href='#'>"+relevant.label+"</a></li>";
        $('#statistical-metrics #statistical-sublist').append(s);
      }

      $('.overall-metric a').on("click", function() {
        console.log('Metric button clicked')
        var $actual = $(this).parent()

        if($actual.hasClass('active-metric')) {
          $actual.removeClass('active-metric')
        }
        else if($actual.hasClass('metric')) {
          console.log('Top metric selected')
          $('.overall-metric.active-metric').removeClass('active-metric')
          $actual.addClass('active-metric')
        }
        else if($actual.hasClass('performance-metric')) {
          $('.metric.active-metric').removeClass('active-metric')
          $actual.addClass('active-metric')
        }

        updateContent()
      });
      updateContent()
  });



  function updateContent() {
    /*
      Logic for AJAX calls and the like to update the center
      panel of the page would go here
    */
    FusionCharts.ready(function(){
      var revenueChart = new FusionCharts({
          "type": "column2d",
          "renderAt": "fusioncharts",
          "width": "500",
          "height": "300",
          "dataFormat": "json",
          "dataSource":  {
            "chart": {
              "caption": "Monthly revenue for last year",
              "subCaption": "Harry's SuperMart",
              "xAxisName": "Month",
              "yAxisName": "Revenues (In USD)",
              "theme": "fint"
           },
           "data": [
              {
                 "label": "Jan",
                 "value": "420000"
              },
              {
                 "label": "Feb",
                 "value": "810000"
              },
              {
                 "label": "Mar",
                 "value": "720000"
              },
              {
                 "label": "Apr",
                 "value": "550000"
              },
              {
                 "label": "May",
                 "value": "910000"
              },
              {
                 "label": "Jun",
                 "value": "510000"
              },
              {
                 "label": "Jul",
                 "value": "680000"
              },
              {
                 "label": "Aug",
                 "value": "620000"
              },
              {
                 "label": "Sep",
                 "value": "610000"
              },
              {
                 "label": "Oct",
                 "value": "490000"
              },
              {
                 "label": "Nov",
                 "value": "900000"
              },
              {
                 "label": "Dec",
                 "value": "730000"
              }
            ]
        }

    });
  revenueChart.render();
  })
  }
