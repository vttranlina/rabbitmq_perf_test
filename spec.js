[{'name': 'performance-test', 'type': 'varying',
'uri': 'amqp://james:eeN7Auquaeng@10.2.3.6:5672',
'params': [{'time-limit': 20,
    'producer-count': 2,
    'consumer-count': 4, 
    'exchange-name': 'performanceTestExchangeName1'
 }],
'variables': [{'name':   'min-msg-size', 'values': [500, 5000, 10000]}]
}]
