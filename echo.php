<?php

// 1- uncategory
// 2- matches
// 3- latest
if (isset($_GET['cat'])) {
	$cat=$_GET['cat'];
} else {
	$cat=3;
}

$posts = json_decode(file_get_contents("http://apolonia.al/wp-json/wp/v2/posts?categories=".$cat), true);
//print_r($posts);
$head='{"code": 200,"data": {"excludeterms": "","stream": [';
$foot='],"dummy": []}}';
//echo $head;
$output=$head;

foreach ($posts as $key => $post) {
	$img= json_decode(file_get_contents("http://apolonia.al/wp-json/wp/v2/media?parent=".$post['id']),true);
	if(isset($img[0]['guid']['rendered'])){
		$img=$img[0]['guid']['rendered'];
	}else {
		$img="static/ajaxpresentation/img/logo.png";
	}
	$output.= '{';
		$output.= '"id":'.$post['id'].',';
		$output.= '"url":"http://apolonia.al/testpost.json?id='.$post['id'].'",';
		$output.= '"slug":"'.$post['slug'].'",';
		$output.= '"title":"'.$post['title']['rendered'].'",';
		$output.= '"inStadionContent": false,';

		$output.= '"thumbnail":{';
			$output.= '"id":"'.$img.'",';
			$output.= '"type":"image",';
			$output.= '"caption":"",';
			$output.= '"urls":[{';
				$output.= '"type":"360",';
				$output.= '"url":"'.$img.'",';
				$output.= '"width":360,';
				$output.= '"height":203';
			$output.= '}]';

		$output.= '},';

		$output.= '"date":'.strtotime($post['date']).',';
		$output.= '"prominent": false,';
		$output.= '"type": "article",';
		$output.= '"channel_tags":[ "App", "Web"],';
		$output.= '"tag":"",';
		$output.= '"isAuthorized":""';

		$output.= '}';

	if ($post!=end($posts)) {
		$output.= ',';
	}
	
}


$output.= $foot;
// print_r($output);

































echo JsonFormatter::prettyPrint($output);
class JsonFormatter {
    public static function prettyPrint(&$j, $indentor = "\t", $indent = "") {
        $inString = $escaped = false;
        $result = $indent;
        if(is_string($j)) {
            $bak = $j;
            $j = str_split(trim($j, '"'));
        }
        while(count($j)) {
            $c = array_shift($j);
            if(false !== strpos("{[,]}", $c)) {
                if($inString) {
                    $result .= $c;
                } else if($c == '{' || $c == '[') {
                    $result .= $c."\n";
                    $result .= self::prettyPrint($j, $indentor, $indentor.$indent);
                    $result .= $indent.array_shift($j);
                } else if($c == '}' || $c == ']') {
                    array_unshift($j, $c);
                    $result .= "\n";
                    return $result;
                } else {
                    $result .= $c."\n".$indent;
                } 
            } else {
                $result .= $c;
                $c == '"' && !$escaped && $inString = !$inString;
                $escaped = $c == '\\' ? !$escaped : false;
            }
        }
        $j = $bak;
        return $result;
    }
}

?>