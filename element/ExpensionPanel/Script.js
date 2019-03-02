

var data = {
    "Reports": {
        "PremiumSummaryMonthWise": {

            "Name": "Premium Summary Branch Month Wise",
            "DefaultSetting": {
                "Daily": "true",
                "Weekly": "true",
                "Monthly": "false",
                "Quaterly": "true",
                "Yearly": "true"
            },
            "CustomSettings": [{
                "Start": "",
                "End": "",
                "EmailTime": ""
            }, {
                "Start": "",
                "End": "",
                "EmailTime": ""
            }, {
                "Start": "",
                "End": "",
                "EmailTime": ""
            }]
        },
        "PremiumSummaryBranchWise": {

            "Name": "Premium Summary Branch Wise",
            "DefaultSetting": {
                "Daily": "true",
                "Weekly": "true",
                "Monthly": "false",
                "Quaterly": "true",
                "Yearly": "true"
            },
            "CustomSettings": [{
                "Start": "",
                "End": "",
                "EmailTime": ""
            }, {
                "Start": "",
                "End": "",
                "EmailTime": ""
            }, {
                "Start": "",
                "End": "",
                "EmailTime": ""
            }, {
                "Start": "",
                "End": "",
                "EmailTime": ""
            }]
        },
        "PremiumSummaryIndustryWise": {

            "Name": "Premium Summary Branch Industry Wise",
            "DefaultSetting": {
                "Daily": "true",
                "Weekly": "true",
                "Monthly": "false",
                "Quaterly": "true",
                "Yearly": "true"
            },
            "CustomSettings": []
        },
        "PremiumSummaryBranchProducerTotal": {

            "Name": "Premium Summary Branch Producer Total",
            "DefaultSetting": {
                "Daily": "true",
                "Weekly": "true",
                "Monthly": "false",
                "Quaterly": "true",
                "Yearly": "true"
            },
            "CustomSettings": [{
                "Start": "",
                "End": "",
                "EmailTime": ""
            }, {
                "Start": "",
                "End": "",
                "EmailTime": ""
            }]
        },
        "PremiumSummaryBranchClientAndDepartmentComparison": {
            "Name": "Premium Summary Branch And Client Department Comparison",
            "DefaultSetting": {
                "Daily": "true",
                "Weekly": "true",
                "Monthly": "false",
                "Quaterly": "true",
                "Yearly": "true"
            },
            "CustomSettings": [{
                "Start": "",
                "End": "",
                "EmailTime": ""
            }, {
                "Start": "",
                "End": "",
                "EmailTime": ""
            }]
        },
        "PremiumSummaryBranchandClientAndDepartmentPremiumExpired": {
            "Name": "Premium Summary Branch And Client Department Premium Expired",
            "DefaultSetting": {
                "Daily": "true",
                "Weekly": "true",
                "Monthly": "false",
                "Quaterly": "true",
                "Yearly": "true"
            },
            "CustomSettings": [{
                "Start": "Feb 26, 2019",
                "End": "Feb 26, 2019",
                "EmailTime": "Feb 26, 2019"
            }, {
                "Start": "Feb 26, 2019",
                "End": "Feb 26, 2019",
                "EmailTime": "Feb 26, 2019"
            }, {
                "Start": "Feb 26, 2019",
                "End": "Feb 26, 2019",
                "EmailTime": "Feb 26, 2019"
            }, {
                "Start": "Feb 26, 2019",
                "End": "Feb 26, 2019",
                "EmailTime": "Feb 26, 2019"
            }]
        }
    }
};



var ReportAutoGeneratorSettings = {
    Parameters: {
        DefaultParameters: "",
        CustomParamaters: "",
        Report_Element: "",
        ReportKey: "",
    },
    Init: function (data) {
        ReportAutoGeneratorSettings.ReportElementGenerator(data);
        ReportAutoGeneratorSettings.Element_Init();
    },
    Element_Init: function () {
        ReportAutoGeneratorSettings.Report_Event();

        $('.datepicker').datepicker({
            dateFormat: 'd-M-yy',
            //onSelect: function (dateText, inst) {
            //    $(this).val(dateText);
            //    console.log($(this).val());
            //}
        });
    },
    Report_Event: function () {

        $('.btn_AddCustomParam').on('click', function () {
            ReportAutoGeneratorSettings.Parameters.CustomParamaters = '';
            ReportAutoGeneratorSettings.CustomParameterElement('', '', '')
            $(this).parents('.row').siblings(".PanelCustomParam").append(ReportAutoGeneratorSettings.Parameters.CustomParamaters);
            $('.datepicker').datepicker();
        });
        $('.btn_ClearCustomParams').click(function () {
            $(this).closest('.row').remove();
        });
        $('.btn_save_settings').click(function () {
            // region custom
            ReportAutoGeneratorSettings.Parameters.ReportKey = $(this).attr('data-report');
            var ab = $(document).find('[data-reportcustomparam=' + ReportAutoGeneratorSettings.Parameters.ReportKey + ']').children();

            data.Reports[ReportAutoGeneratorSettings.Parameters.ReportKey]
                .CustomSettings = [];
            $.each(ab, function (a, b) {
                data.Reports[ReportAutoGeneratorSettings.Parameters.ReportKey]
                    .CustomSettings.push({
                        "Start": $(b).children().find('input.FromDate').val(),
                        "End": $(b).children().find('input.ToDate').val(),
                        "EmailTime": $(b).children().find('input.emailDateTime').val()
                    });
            })
            console.log(data.Reports[ReportAutoGeneratorSettings.Parameters.ReportKey]
                .CustomSettings);

            var k = $(document).find('[data-reportdefaultparam=' + ReportAutoGeneratorSettings.Parameters.ReportKey + ']').children();

            $.each(k, function (a, b) {

                console.log($(b).children().find('input').attr('data-key'));
                ////note to be continue for default parameters
                data.Reports[ReportAutoGeneratorSettings.Parameters.ReportKey]
                    .DefaultSetting.push({
                        "Daily": ($(b).children().find('input').attr('checked')) ? true : false;
                        "Weekly": "true",
                        "Monthly": "false",
                        "Quaterly": "true",
                        "Yearly": "true"
                    });
            })
            console.log(k);


        });


    },
    // Ajax: {
    //     Data: function () {

    //     }
    // }
    CustomParameterElement: function (start, end, EmailTime) {
        ReportAutoGeneratorSettings.Parameters.CustomParamaters +=
            " <div class='row'>                                                       " +
            "<div class='input-field col l3 m3 s3'>                                   " +
            "    <input  values='" + start + "' type='text' class='datepicker FromDate'>                 " +
            "        <label for='FromDate'>From Date</label>                          " +
            "            </div>                                                       " +
            "    <div class='input-field col l3 m3 s3'>                               " +
            "        <input  values='" + end + "' type='text' class='datepicker ToDate'>             " +
            "            <label for='ToDate'>To Date</label>                        " +
            "            </div>                                                       " +
            "                <div class='input-field col  l5 m5 s5'>                  " +
            "                    <input  values='" + EmailTime + "' type='text' class='datepicker emailDateTime'> " +
            "                        <label for='emailDateTime'>Email Datetime</label>     " +
            "                </div>                                                   " +
            "                <div class='col l1 m1 s1 center-align '>                 " +
            "                    <button class='btn waves-effect waves-light btn-small btn_ClearCustomParams'  type='button'> " +
            "                        <i class='material-icons '>close</i>             " +
            "                    </button> " +
            "                </div> " +
            "            </div>";
    },
    CustomParameterBuilder: function (data) {
        $.map(data, function (datas, key) {
            ReportAutoGeneratorSettings.CustomParameterElement(datas.Start, datas.End, datas.EmailTime);
        });
    },
    DefaultParameterBuilder: function (data) {

        $.map(data, function (data, key) {
            ReportAutoGeneratorSettings.Parameters.DefaultParameters += "<p><label>" +
                "<input type='checkbox' data-key=" + key + "  " + ((data == "true") ? " checked='checked' " : false) + " /> <span>Send " + key + " report</span> </label></p>";
        });
    },
    ReportElement: function (data, key) {
        console.log("Report Element");
        ReportAutoGeneratorSettings.Parameters.CustomParamaters = "";
        ReportAutoGeneratorSettings.Parameters.DefaultParameters = "";
        ReportAutoGeneratorSettings.DefaultParameterBuilder(data.DefaultSetting);
        ReportAutoGeneratorSettings.CustomParameterBuilder(data.CustomSettings);
        ReportAutoGeneratorSettings.Parameters.Report_Element = '<details data-report-element="' + key + '" >' +
            '    <summary  data-reportkey="' + key + '">' +
            '        <ul>' +
            '            <li class="titleName">' + data.Name + '</li>' +
            '            <li class="titleValue"> </li>' +
            '        </ul>' +
            '    </summary>' +
            '    <div class="content">' +
            '        <h6>Default Settings</h6>' +
            '        <form action="#" data-reportdefaultparam="' + key + '"> ' + ReportAutoGeneratorSettings.Parameters.DefaultParameters + '' +
            '        </form>' +
            '        <div class="row">' +
            '            <div class="col l6 m6 s6 left-align">' +
            '                <h6>Custom Settings</h6></div>' +
            '            <div class="col l6 m6 s6 right-align">' +
            '                <button class="btn waves-effect waves-light btn-small btn_AddCustomParam" id="btn_AddCustomParam" type="button" name="action"> <i class="material-icons ">add</i> </button>' +
            '            </div>' +
            '        </div>' +
            '        <div class="PanelCustomParam" data-reportcustomparam="' + key + '">' +
            ReportAutoGeneratorSettings.Parameters.CustomParamaters +
            '        </div>' +
            '        <div class="row">' +
            '            <div class="col l12 m12 s12 right-align">' +
            '<button class="btn waves-effect waves-light btn_save_settings" data-report="' + key + '" type="button" name="action">Save' +
            '<i class="material-icons right">send</i>' +
            '</button></div>' +


            '        </div>' +
            '    </div>' +
            '</details>';
        return ReportAutoGeneratorSettings.Parameters.Report_Element;
    },
    ReportElementGenerator: function (data) {
        $.map(data.Reports, function (data, key) {

            $('#ReportPanel').append(ReportAutoGeneratorSettings.ReportElement(data, key));
        })
    }
}



$(document).ready(ReportAutoGeneratorSettings.Init(data));

//#endregion








