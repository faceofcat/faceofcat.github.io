function initJsonView() {
    var template = $('#json-template');
    var x = [
        {
            title: 'No Metadata',
            data: {
                mihaitza: 5,
                costelush: 'test'
            }
        },
        {
            title: "Forcing 'Number' property to be displayed as 'String'",
            data: {
                _mihaitzaInfo: { viewKey: 'string' },
                mihaitza: 5,
                costelush: 'test'
            }
        },
        {
            title: 'Categories',
            data: {
                _mihaitzaInfo: { category: 'Numbers' },
                _costelushInfo: { category: 'Strings' },
                mihaitza: 5,
                costelush: 'test'
            }
        },
        {
            title: 'Category Metadata',
            data: {
                _metadata: {
                    _info: {
                        categoriesInfo: {
                            'Strings': 'table'
                        }
                    }
                },
                _mihaitzaInfo: { category: 'Numbers' },
                _costelushInfo: { category: 'Strings' },
                _gigelInfo: { category: 'Strings' },
                mihaitza: 5,
                costelush: 'test',
                gigel: 'This is Gigi!'
            }
        },
        {
            title: 'Nested Objects',
            data: {
                mihaitza: 5,
                costelush: {
                    gigi: 'test',
                    gigel: 42
                }
            }
        },
        {
            title: 'Nested Categories',
            data: {
                _mihaitzaInfo: { category: 'A' },
                mihaitza: 5,
                costelush: {
                    _gigiInfo: { category: 'A' },
                    _gigelInfo: { category: ['_', 'B'] },
                    _gicutzaInfo: { category: ['B'] },
                    _testInfo: { category: '_.A' },
                    gigi: 'test',
                    gigel: 42,
                    gicutza: 'testy',
                    test: 425
                }
            }
        },
        {
            title: 'BIG THINGY',
            data: {
                test1: 5,
                test2: 'mihaitza',
                'null': null,
                _fake: 425,
                __really_fake: 425,
                test3: {
                    _metadata: {
                        a: {
                            label: 'costelush',
                            category: 'GIGI'
                        },
                        b: {
                            label: 'mihaitza'
                        },
                        e: {
                            label: 'fake boolean',
                            viewKey: 'boolean',
                            category: 'GIGI'
                        },
                        c: {
                            category: ['GIGI']
                        }
                    },
                    a: 42,
                    b: '425',
                    xxx: {
                        _metadata: {
                            _info: {
                                layoutKey: 'table'
                            }
                        },
                        costel: 'mihaitza',
                        mihaitza: 'costel'
                    },
                    c: false,
                    d: function () { alert("Gigi was here!"); },
                    e: 5
                },
                _test3Info: {
                    index: -1
                },
                test4: function (thing) { alert('Gigi and ' + thing + ' were here!'); },
                test5: [2, 4, 1, 7, 5],
                _test5Info: {
                    viewKey: 'array-list'
                },
                test6: [2, 4, 1, 7, 5],
                _test6Info: {
                    viewKey: 'array-table'
                },
                test7: [2, 4, 1, 7, 5],
                _test7Info: {
                    viewKey: 'array-chart',
                    data: {
                        width: 175,
                        height: 100
                    }
                }
            }
        }
    ];
    var jsonConfig = {
        filterKeys: ['chartJS'],
        dataInfoProviderKeys: [],
        entityInfoProviderKeys: [],
        categoryLayoutKey: 'json'
    };
    x.forEach(function (xx) {
        var container = template.clone();
        var view = net.ndrei.json.JSONView.create(container.find('#gigi'), xx.data);
        net.ndrei.json.JSONView.create(container.find('#original'), xx.data, jsonConfig);
        net.ndrei.json.JSONView.create(container.find('#parsed'), view.context ? view.context.rootEntityInfo : { warn: 'root entity not found' }, jsonConfig);
        net.ndrei.json.JSONView.create(container.find('#view'), view.viewTree.root, jsonConfig);
        container.find('.panel-heading > h3').text(xx.title);
        template.before(container);
        container.show();
        container.on('click', 'ul.nav-tabs a', function (e) {
            e.preventDefault();
            var tab = $(this).attr('href') || '';
            tab = tab.substr(tab.lastIndexOf('#') + 1);
            container.find('#source div.tab-content > div').removeClass('active');
            container.find('#source div.tab-content > div#' + tab).addClass('active');
        });
    });
    template.remove();
}
//# sourceMappingURL=json-data.js.map