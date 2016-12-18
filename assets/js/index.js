$(document).ready(function(){
      console.log('Page has fully loaded')
})

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
    $.getJSON('http://echo.jsontest.com/title/ipsum/content/blah', function (data) {
      FusionCharts.ready(function(){
      var revenueChart = new FusionCharts({
          "type": "column2d",
          "renderAt": "fusioncharts",
          "width": "700",
          "height": "400",
          "dataFormat": "json",
          "dataSource":  {
            "chart": {
              "caption": "Average Writes Greater Than 32ms(Percentage)",
              "xAxisName": "Storage Device ids",
              "yAxisName": "Average writesGt32msPct",
              "theme": "fint"
           },
           "data": [
              {
                 "label": "Armory",//472
                 "value": "0.279"
              },
              {
                 "label": "Murmur II",//473
                 "value": "0.05"
              },
              {
                 "label": "Frogman",//474
                 "value": "0.024"
              },
              {
                 "label": "Kismet",//475
                 "value": "0.08"
              },
              {
                 "label": "Sergei Kravinoff",//477
                 "value": "0.104"
              },
              {
                 "label": "Kl'rt",//478
                 "value": "0.04"
              },
              {
                 "label": "Zuras",//479
                 "value": "0.07"
              },
              {
                 "label": "Mastermind",//480
                 "value": "0.02"
              },
              {
                 "label": "SuperPro",//482
                 "value": "0.25"
              },
              {
                 "label": "Link",//483
                 "value": "0.04"
              },
              {
                 "label": "Nameless One",//486
                 "value": "0.114"
              },
              {
                 "label": "Miss America",//487
                 "value": "0.411"
              }
            ]
        }

    });
  console.log(data)
  revenueChart.render();
  })
    })

    

  }
