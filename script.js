$("button").click(function() {
    var number = $(".number").val();
    var color = $(".color").val();
    
    if (number <=25 && color === "Blue")
        { $(".answer").text("Tzuyu");
        $(".Tzuyu").show();
    
    } else if (number <=25 && color === "Purple")
        { $(".answer").text("Sana");
        $(".Sana").show();
    
    } else if (number >=29 && color === "Red")
        { $(".answer").text("Chaeyoung");
        $(".Chaeyoung").show();
   
    } else if (number >=29 && color === "Pink")
        { $(".answer").text("Momo");
        $(".Momo").show();
    
    } else if (number === "" || color === "")
        { $(".answer").text("Please enter your information.");
    
    } else { $(".answer").text("Tzuyu");
        $(".Tzuyu").show();
    
    }
});