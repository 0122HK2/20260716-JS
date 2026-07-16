$(function() {
    // モーダルを表示する関数
    function showModal(imageSrc) {
        // body要素の末尾にdiv#bgとdiv#photoを追加
        $("body")
          .append('<div id="bg"></div>')
          .append('<div id="photo"></div>');

        // それぞれ非表示にする
        $("#bg, #photo").hide();

        // #photoの中にimg要素を追加
        $("#photo").html("<img>");

        // img要素にsrc属性とalt属性を設定
        $("#photo img")
          .attr("src", imageSrc)
          .attr("alt", "Photo");

        // #bgと#photoをフェードイン
        $("#bg, #photo").fadeIn(800);

        // 背景または画像をクリックしたときにモーダルを閉じる
        $("#bg, #photo").click(function() {
            $("#bg").fadeOut(function() {
                $(this).remove();
            });
            $("#photo").fadeOut(function() {
                $(this).remove();
            });
        });
    }

    // 1. 規約内の画像をクリックしたときの処理
    $(".modal-trigger").click(function(e) {
        e.preventDefault(); // リンクの標準動作を防止
        const imageSrc = $(this).attr("href");
        showModal(imageSrc);
    });

    // 2. 同意ボタンをクリックしたときの処理
    $("#submit-btn").click(function() {
        // ボタンが有効な場合のみ実行
        if (!$(this).prop("disabled")) {
            const imageSrc = $(this).attr("data-target");
            showModal(imageSrc);
        }
    });

    // 3. 同意チェックボックスの制御
    $('#agree-checkbox').change(function() {
        const $btn = $('#submit-btn');
        if ($(this).is(':checked')) {
            $btn.prop('disabled', false); // ボタンを有効化
        } else {
            $btn.prop('disabled', true);  // ボタンを無効化
        }
    });
});