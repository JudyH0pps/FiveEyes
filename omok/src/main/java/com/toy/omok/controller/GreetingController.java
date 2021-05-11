package com.toy.omok.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.toy.omok.vo.Greeting;
import com.toy.omok.vo.SocketMessage;

@Controller
public class GreetingController {
	
	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public Greeting greeting(SocketMessage message) throws Exception{
		Thread.sleep(100);
		return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()));
	}
}
